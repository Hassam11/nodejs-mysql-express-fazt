import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employees");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM employees WHERE id =?", [
      id,
    ]);

    if (rows.length <= 0)
      return res.status(400).json({ message: "No se encontró el empleado" });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const createEmployees = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employees (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const deleteEmployess = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query("DELETE FROM employees WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(400).json({
        message: "Employee not found",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    const [result] = await pool.query(
      "UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(400).json({
        message: "Employee not found",
      });
    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [
      id,
    ]);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};
