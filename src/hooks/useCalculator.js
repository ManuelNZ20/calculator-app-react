import { useState } from "react";

export const useCalculator = () => {
  const [results, setResults] = useState({
    res: "0",
    pre: "",
    op: false,
    point: false,
  });

  const numberZero = (number) => {
    const { res, op, pre } = results;
    if (!op) {
      if (res !== "0") {
        setResults({
          ...results,
          res: res + number,
          pre: pre + number,
        });
      } else {
        setResults({
          ...results,
          res: number,
          pre: number,
        });
      }
    }
  };
  const addPoint = (character) => {
    const { res, op, point, pre } = results;
    if (!point) {
      const searchPoint = pre.split("").includes(".");
      if (!searchPoint) {
        if (!op) {
          setResults({
            ...results,
            res: res + character,
            pre: pre + character,
          });
        } else {
          setResults({
            ...results,
            res: res + "0" + character,
            pre: pre + "0" + character,
          });
        }
      }
    }
  };
  const addNumber = (number) => {
    const { res, pre } = results;
    if (res === "0") {
      setResults({
        res: number,
        pre: number,
        point: false,
        op: false,
      });
    } else {
      setResults({
        res: res + number,
        pre: pre + number,
        point: false,
        op: false,
      });
    }
  };
  const addOperation = (character) => {
    const { res, op, pre } = results;
    if (character === "=") {
      if (!op) {
        setResults({
          res: `${eval(res)}`,
          pre: "",
          point: false,
          op: false,
        });
      }
      return;
    }

    if (!op) {
      switch (character) {
        case "/":
          if (character === "/") {
            if (pre !== "0") {
              setResults({
                res: res + character,
                pre: "",
                point: false,
                op: true,
              });
            }
          }
          break;
        case "x":
          setResults({
            res: res + "*",
            pre: "",
            point: false,
            op: true,
          });
          break;
        default:
          setResults({
            res: res + character,
            pre: "",
            point: false,
            op: true,
          });
          break;
      }
    }
  };
  const reset = () => {
    setResults({
      res: "0",
      pre: "",
      op: false,
      point: false,
    });
  };
  const del = () => {
    const { res, pre } = results;
    const newRes = res.slice(0, res.length - 1);
    const newPre = pre.slice(0, pre.length - 1);
    const searchPoint = newPre.split("").includes(".");
    const current = res.slice(res.length - 1, res.length);
    if (!searchPoint) {
      switch (current) {
        case "0":
          setResults({
            pre: "",
            res: "0",
            op: false,
            point: false,
          });
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          setResults({
            res: newRes,
            pre: newPre,
            point: false,
            op: false,
          });
          break;
        default:
          if (newRes.length === 0) {
            setResults({
              res: "0",
              pre: "",
              point: false,
              op: false,
            });
          } else {
            setResults({
              res: newRes,
              pre: newPre,
              point: false,
            });
          }
          break;
      }
    }
  };
  const handleAddCharacter = (character) => {
    switch (character) {
      case "0":
        numberZero(character);
        break;
      case ".":
        addPoint(character);
        break;
      case "+":
      case "-":
      case "x":
      case "/":
        addOperation(character);
        break;
      case "del":
        del();
        break;
      case "reset":
        reset();
        break;
      case "=":
        addOperation(character);
        break;
      default:
        addNumber(character);
        break;
    }
  };
  return {
    results,
    handleAddCharacter,
  };
};
