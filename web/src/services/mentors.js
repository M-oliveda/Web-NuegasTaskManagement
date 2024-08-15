import { default as mentorsDB } from "../data/mentors.json";

export async function getMentorsId() {
  return mentorsDB.map((mentor) => mentor.id);
}

export async function getMentorById(mentorId) {
  if (!mentorId) {
    return false;
  }

  const result = mentorsDB.find((mentor) => mentor.id == mentorId);

  if (result) {
    return result;
  } else {
    return false;
  }
}
