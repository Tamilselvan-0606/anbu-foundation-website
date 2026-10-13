import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { PageBanner } from '../components/PageBanner.tsx';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const SuccessStories: React.FC = () => {
  const { openScholarshipModal } = useOutletContext<ContextType>();

  const stories = [
    {
      id: 1,
      title: "Sabareeswari K.",
      photo: "/images/sabareeswari.jpg",
      description:
        "I lost my parents suddenly. I was very weak emotionally; I have lost my confidence and question marks everywhere in my life from basic necessities to continuing my education. In that situation, I came to know about this scholarship scheme provided by Anbu foundation through MAATRAM. Now, I am able to study without any trouble. Regained my confidence and faith about my future and career. My humble thanks to ANBU.",
    },
    {
      id: 2,
      title: "Hemalatha P.",
      photo: "/images/hemalatha.jpg",
      description:
        "I have adopted Sabareeswari.K after her parents demise, with faith in god that I will be able to raise her well. Due to my financial instability, I had a tough time and was not in a position to give her good education. After she got the scholarship from this foundation, I was relieved and thanked GOD for showing me a path. I am very happy now and many thanks to ANBU and MAATRAM.",
    },
    {
      id: 3,
      title: "Dhivya V.",
      photo: "/images/dhivya.jpg",
      description:
        "I am Dhivya studying in ECE, the course which I dreamt to do. Anbu Foundation has given lot of confidence to my aspiration. I have understood that their intention is not only to help students financially with the scholarship but more importantly to see them winning always. In the University, we are also offered with part-time jobs which we can do without disturbing our studies. Now my communication skills improved a lot and also economic status. My life got completely changed after joining in Sathyabama University. This is because of the wonderful support given by ANBU and AGARAM.",
    },
    {
      id: 4,
      title: "Parent Feedback",
      photo: null,
      description:
        "We are from an agricultural background, staying in a remote village named Seepuliyur of Mayiladuthurai taluk. From generations our families are facing the same problem of poor financial situation stopping the children in our families to get proper education. I felt so bad before few years because our family turn came in facing similar situation. We were not able to help our daughter as our financial situation is so bad. But when approached through AGARAM Foundation, Anbu Foundation instilled confidence in my daughter and encouraged by giving seat in the course she want to continue her studies. The situation changed and brought many smiles to our family, we are now an exceptional family of our village. We are very happy.",
    },
  ];

  return (
    <div className="space-y-0">
      <PageBanner
        title="Success Stories"
        subtitle="Every opportunity creates the possibility of a new beginning. Discover the journeys and feedback of scholars and families supported by Anbu Foundation."
        badge="Impact & Testimonials"
      />

      {/* Stories Table Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E9E1E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Table matching reference UI */}
          <div className="overflow-x-auto rounded-xl border border-[#D0D7DE] shadow-sm bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-[#831238] text-white">
                  <th
                    scope="col"
                    className="w-[30%] sm:w-[28%] py-4 px-6 text-center font-bold text-xs sm:text-sm tracking-wider uppercase border-r border-white/20 select-none"
                  >
                    TITLE
                  </th>
                  <th
                    scope="col"
                    className="w-[70%] sm:w-[72%] py-4 px-6 text-center font-bold text-xs sm:text-sm tracking-wider uppercase select-none"
                  >
                    DESCRIPTION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D0D7DE]">
                {stories.map((story) => (
                  <tr key={story.id} className="hover:bg-[#FAF7F8]/60 transition-colors">
                    {/* TITLE COLUMN */}
                    <td className="w-[30%] sm:w-[28%] p-6 sm:p-8 align-middle text-center border-r border-[#D0D7DE] bg-white">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        {story.photo && (
                          <img
                            src={story.photo}
                            alt={story.title}
                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-[#831238]/20 shadow-sm"
                          />
                        )}
                        <h3 className="font-bold text-[#262126] text-sm sm:text-base leading-snug">
                          {story.title}
                        </h3>
                      </div>
                    </td>

                    {/* DESCRIPTION COLUMN */}
                    <td className="w-[70%] sm:w-[72%] p-6 sm:p-8 align-middle text-[#262126] text-xs sm:text-sm leading-relaxed text-justify">
                      <p className="leading-relaxed whitespace-pre-line">
                        {story.description}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 bg-[#F6E9EE]/50 rounded-2xl p-8 border border-[#831238]/20 text-center space-y-4 max-w-3xl mx-auto">
            <h3 className="text-xl font-sans font-bold text-[#262126]">
              Are You an Eligible Student Seeking Financial Support?
            </h3>
            <p className="text-xs sm:text-sm text-[#70676C] leading-relaxed">
              If you have secured admission or wish to study at Sathyabama Institute of Science and Technology, submit your application for the upcoming academic cycle.
            </p>
            <button
              onClick={openScholarshipModal}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg transition-colors cursor-pointer"
            >
              Apply for Scholarship
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
