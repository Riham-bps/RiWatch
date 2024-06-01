import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import UserList from "./UserList";

export default function FormSignUp() {
  const [validated, setValidated] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [users, setUsers] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    return localValue ? JSON.parse(localValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(users));
  }, [users]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      addUser(newUser);
    }
    setValidated(true);
  };

  function addUser(title) {
    setUsers((currentUsers) => {
      return [...currentUsers, { id: crypto.randomUUID(), title }];
    });
    setNewUser("");
  }

  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="mt-5"
      >
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Prénom obligatoire"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <Form.Control.Feedback>Ça a l'air bien !</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Veuillez fournir un prénom valide.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button type="submit">Soumettre le formulaire</Button>
      </Form>
      <UserList users={users} />
    </>
  );
}
