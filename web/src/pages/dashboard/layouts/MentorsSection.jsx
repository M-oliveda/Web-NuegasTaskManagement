import { useEffect, useState } from "react";
import { getMentorsId } from "../../../services/mentors";
import Mentor from "../../../components/Mentor";
import Carousel from "../../../components/Carousel";

export default function MentorsSection() {
  const [mentorsId, setMentorsId] = useState(null);

  useEffect(() => {
    getMentorsId().then((result) => setMentorsId(result));
  });

  return (
    mentorsId && (
      <Carousel title={"Montly Mentors"}>
        {mentorsId.map((id) => (
          <Mentor id={id} key={id} />
        ))}
      </Carousel>
    )
  );
}
