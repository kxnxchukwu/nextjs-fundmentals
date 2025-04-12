export default function EditIssuePage({
  params,
}: Readonly<{
  params: {
    id: string
  }
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Edit Issue {params.id}</h1>
      <p className="mt-4 text-lg">
        This is the edit issue page for issue {params.id}.
      </p>
    </div>
  )
}
