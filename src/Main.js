import Card from "./Card";
const Main = (props) => {
  return (
    <>
      {props.availableJobs.map((job) => {
        return (
          <Card job={job} key={job.id} onClick={props.onCardButtonClick} />
        );
      })}
    </>
  );
};
export default Main;
