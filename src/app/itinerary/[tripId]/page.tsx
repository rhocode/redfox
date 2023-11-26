import ScheduleAccordion from "../../_components/ScheduleAccordion";

export default async function ItineraryPage({
  params,
}: {
  params: { tripId: string };
}) {
  // Do something with the dynamic path
  console.log(params);

  // TODO: add schedule accordion to item
  return (
    <>
      <ScheduleAccordion />
    </>
  );
}
