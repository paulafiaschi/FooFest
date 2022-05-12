export default function Act(act) {
  console.log(act);
  return (
    <li>
      {act.start} - {act.end} -- {act.act}
    </li>
  );
}
