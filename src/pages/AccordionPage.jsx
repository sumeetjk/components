import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: "asdfadsf",
      label: "can i use react on a project?",
      content:
        "you can use react on any of your project you can use react on any of your project you can use react on any of your project you can use react on any of your project",
    },
    {
      id: "kjoualkrtj",
      label: "can i use javascript on a project?",
      content:
        "you can use javascript on any of your project you can use javascript on any of your project you can use javascript on any of your project you can use javascript on any of your project",
    },
    {
      id: "iuqewt",
      label: "can i use css on a project?",
      content:
        "you can use css on any of your project you can use css on any of your project you can use css on any of your project you can use css on any of your project",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
