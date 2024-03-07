import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../libs/mysql';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  try {
    const db = await pool.getConnection();
    const [projectList] = await db.query(
      `select * from project where p_no = ${id}`,
    );

    db.release();
    res.status(200).json({ result: projectList });
  } catch (error) {
    res.status(500).json({ error });
  }
}
