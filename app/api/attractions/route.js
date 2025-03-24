import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

const db = mysqlPool.promise()

export async function GET(request) {
  try {
    const [rows, fields] = await db.query(
      `SELECT * FROM attractions;`
    )
    return NextResponse.json(rows)
  } catch(error) {
    return NextResponse.json({error:"Failed to fetch"}, {status: 500})
  }
}