export default function StudentTable({ students }) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b">
          <th className="p-2">Index</th>
          <th className="p-2">Name</th>
          <th className="p-2">Parent phone</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id} className="border-b">
            <td className="p-2">{s.indexNumber}</td>
            <td className="p-2">{s.fullName}</td>
            <td className="p-2">{s.parentPhone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}