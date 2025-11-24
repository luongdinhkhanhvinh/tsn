import { v4 as uuidv4 } from "uuid";

export function getAnonSessionId() {
  let id = localStorage.getItem("anon_session_id");
  if (!id) {
    id = uuidv4();
    localStorage.setItem("anon_session_id", id);
  }
  return id;
}
