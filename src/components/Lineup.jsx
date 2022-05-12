import Day from "./Day";

export default function Lineup(stage) {
  // console.log(midgard.midgard.mon);
  Object.values(stage).map((days) => console.log(days));
  console.log(stage);
  const monday = stage.mon;

  return (
    <section>
      <div>
        <Day {...monday}></Day>
      </div>
    </section>

    // return <ul>{schedule.map((jotunheim) => console.log(jotunheim))}</ul>;

    /* // return <section className="product__list">{schedule[0].map((jotunheim) => console.log(jotunheim))}</section>; */
  );
}
