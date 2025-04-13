import { redirect } from 'next/navigation'
import IssueForm from './IssueForm'
import { getCurrentUser } from '@/lib/dal'

export default async function NewIssue() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/signin')
  }

  return <IssueForm userId={user.id} />
}
