import { weekTimeline } from "@/helpers/weekTimeline";
import TimelineWeek from "../cards/timelineWeek/TimelineWeek";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Timeline = () => {
  return (
    <section id="timeline">
      <header>
        <h2 className="title text-left  md:text-center ">
          Explore nosso cronograma de treinos na{" "}
          <span className="font-black">BRAVUS</span>
        </h2>
        <p className="description text-left  md:text-center">
          Um cronograma bem planejado é essencial para garantir que nossos
          alunos obtenham o máximo de sua experiência de treinamento. Temos uma
          variedade de opções de aulas para atende-los.
        </p>
      </header>
      <div className=" hidden lg:flex  justify-center  flex-wrap  w-full gap-2">
        <div className="space-y-4">
          <h3 className="text-center font-medium text-4xl">Segunda</h3>

          <div className="space-y-2">
            {weekTimeline.monday.map((item, index) => (
              <TimelineWeek
                to={item.to}
                key={index}
                time={item.time}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-center font-medium text-4xl">Terça</h3>

          <div className="space-y-2">
            {weekTimeline.tuesday.map((item, index) => (
              <TimelineWeek
                to={item.to}
                key={index}
                time={item.time}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-center font-medium text-4xl">Quarta</h3>

          <div className="space-y-2">
            {weekTimeline.wednesday.map((item, index) => (
              <TimelineWeek
                to={item.to}
                key={index}
                time={item.time}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-center font-medium text-4xl">Quinta</h3>

          <div className="space-y-2">
            {weekTimeline.thursday.map((item, index) => (
              <TimelineWeek
                to={item.to}
                key={index}
                time={item.time}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-center font-medium text-4xl">Sexta</h3>

          <div className="space-y-2">
            {weekTimeline.friday.map((item, index) => (
              <TimelineWeek
                to={item.to}
                key={index}
                time={item.time}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-center font-medium text-4xl">Sábado</h3>

          <div className="space-y-2">
            {weekTimeline.saturday.map((item, index) => (
              <TimelineWeek
                to={item.to}
                key={index}
                time={item.time}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-start  lg:hidden justify-center w-full flex-col gap-4">
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Segunda-Feira</AccordionTrigger>
            <AccordionContent className="flex items-start flex-col gap-2">
              {weekTimeline.monday.map((item, index) => (
                <div
                  key={index}
                  className={` flex items-center gap-2 ${
                    item.type == "" && "hidden"
                  }`}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="opacity-80">
                    {item.type} - {item.time} {item.to && `- ${item.to}`}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Terça-Feira</AccordionTrigger>
            <AccordionContent className="flex items-start flex-col gap-2">
              {weekTimeline.tuesday.map((item, index) => (
                <div
                  key={index}
                  className={` flex items-center gap-2 ${
                    item.type == "" && "hidden"
                  }`}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="opacity-80">
                    {item.type} - {item.time} {item.to && `- ${item.to}`}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Quarta-Feira</AccordionTrigger>
            <AccordionContent className="flex items-start flex-col gap-2">
              {weekTimeline.wednesday.map((item, index) => (
                <div
                  key={index}
                  className={` flex items-center gap-2 ${
                    item.type == "" && "hidden"
                  }`}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="opacity-80">
                    {item.type} - {item.time} {item.to && `- ${item.to}`}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Quinta-Feira</AccordionTrigger>
            <AccordionContent className="flex items-start flex-col gap-2">
              {weekTimeline.thursday.map((item, index) => (
                <div
                  key={index}
                  className={` flex items-center gap-2 ${
                    item.type == "" && "hidden"
                  }`}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="opacity-80">
                    {item.type} - {item.time} {item.to && `- ${item.to}`}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Sexta-Feira</AccordionTrigger>
            <AccordionContent className="flex items-start flex-col gap-2">
              {weekTimeline.friday.map((item, index) => (
                <div
                  key={index}
                  className={` flex items-center gap-2 ${
                    item.type == "" && "hidden"
                  }`}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="opacity-80">
                    {item.type} - {item.time} {item.to && `- ${item.to}`}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Sábado</AccordionTrigger>
            <AccordionContent className="flex items-start flex-col gap-2">
              {weekTimeline.saturday.map((item, index) => (
                <div
                  key={index}
                  className={` flex items-center gap-2 ${
                    item.type == "" && "hidden"
                  }`}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="opacity-80">
                    {item.type} - {item.time} {item.to && `- ${item.to}`}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Timeline;
