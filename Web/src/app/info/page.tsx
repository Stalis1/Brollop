const Page = () => {
    return <div className="flex flex-row">
        <BulletPoints points={["Plats: Fredriksrovägen 85, 244 91 Kävlinge", "Datum: 1 juli 2026", "Tid: ?", "etc etc etc..."]}/>
    </div>
}
export default Page;

const BulletPoints = ({points}: {points: string[]}) => {
    return <div>
        <ul>
            {points.map(x => {
                return <BulletPoint text={x}/>
            })}
        </ul>
    </div>
}

const BulletPoint = ({ text }: {text: string}) => {
    return (
      <li className="flex items-center space-x-2">
        <span className="h-2 w-2 rounded-full bg-neutral-800"></span>
        <span>{text}</span>
      </li>
    );
  };