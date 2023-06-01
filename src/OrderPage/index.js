import { CalendarHeart, GeoAltFill } from 'react-bootstrap-icons';
import { epochToDate } from './utils';
import {BandForm} from './BandForm'
import {DangerousHtml} from '../components/DangerousHtml';


export const OrderPage = ({ band }) => {
  return (
    <>
      <h1 className="text-3xl font-bold my-2">{band.name}</h1>
      <ul>
        <li><CalendarHeart className="inline-block" /> {epochToDate(band.date)}</li>
        <li><GeoAltFill className="inline-block" /> {band.location}</li>
      </ul>
      <div className="flex mt-8">
        <div className="w-1/3 m-2">
          <img className="width-full pb-8 rounded" src={band.imgUrl} alt={band.name} />
          <DangerousHtml content={band.description_blurb} />
        </div>
        <div className="bg-slate-100 w-2/3 m-2 px-6 py-4 rounded">
          <BandForm band={band} />
        </div>
      </div>
    </>
  );
}

export default BandForm;
