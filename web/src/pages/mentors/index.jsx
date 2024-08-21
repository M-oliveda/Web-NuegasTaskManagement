import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import TopBar from "../../layouts/TopBar";
import { getMentorsId } from "../../services/mentors";
import Mentor from "../../components/Mentor";

export default function MentorsPage() {
  const [mentorsId, setMentorsId] = useState(null);

  useEffect(() => {
    getMentorsId().then((result) => setMentorsId(result));
  }, []);

  return (
    <div>
      <TopBar title="Explore Mentors" />
      <div className="bg-[#FAFAFA] xl:p-8">
        <Carousel title="Recent Mentors">
          {mentorsId &&
            mentorsId.map((mentorId) => (
              <Mentor key={mentorId} id={mentorId} />
            ))}
        </Carousel>
        <section className="mx-6 my-8">
          <h2 className="mb-[18px] text-xl font-semibold text-secondary">
            Mentors
          </h2>
          <ul className="flex flex-col flex-wrap gap-4 xl:flex-row">
            {mentorsId &&
              mentorsId.map((mentorId) => (
                <li key={mentorId}>
                  <Mentor
                    id={mentorId}
                    width="354px"
                    enableDescription={true}
                  />
                </li>
              ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
