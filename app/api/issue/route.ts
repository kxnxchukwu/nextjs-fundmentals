import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { issues } from '@/db/schema'

export async function GET() {
  try {
    const issues = await db.query.issues.findMany({})
    return NextResponse.json({ data: issues }, { status: 200 })
  } catch (error) {
    console.error('Error fetching issues:', error)
    return NextResponse.json(
      { error: 'Failed to fetch issues' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    await db.insert(issues).values(data)
    return NextResponse.json(
      { message: 'Issue created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating issue:', error)
    return NextResponse.json(
      { error: 'Failed to create issue' },
      { status: 500 }
    )
  }
}
