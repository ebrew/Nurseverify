
export default function DashboardHeader() {
  return (
    <header className="flex flex-col justify-between gap-4 border-b border-gray-200 bg-white px-6 py-5 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Administration Dashboard
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Welcome to your NurseVerify workspace.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">
            System Administrator
          </p>
          <p className="text-xs text-gray-500">
            Administrator
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
          SA
        </div>
      </div>
    </header>
  );
}
