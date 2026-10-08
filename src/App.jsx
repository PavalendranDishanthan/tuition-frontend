import { useEffect, useState } from "react";
import api from "./api";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

export default function App() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const res = await api.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Tuition Management</h1>
      <StudentForm onCreated={loadStudents} />
      <StudentTable students={students} />
    </div>
  );
}