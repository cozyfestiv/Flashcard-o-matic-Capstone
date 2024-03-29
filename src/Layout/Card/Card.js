import { useRouteMatch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { deleteCard } from '../../utils/api';

function Card ({ card, id }) {
  const { url } = useRouteMatch();
  console.log(url);

  const handleDelete = async () => {
    const cardConfirmDelete = window.confirm(
      'Delete this card? /n You will not be able to recover it.'
    );
    if (cardConfirmDelete) {
      await deleteCard(id);
    }
  };

  return (
    <div className='card-container m-3 p-0'>
      <div className='row card-header m-1'>
        <div className='col  pl-4'>
          <h4 className=''>Front</h4>
        </div>
        <div className='col pl-4'>
          <h4 className=''>Back</h4>
        </div>
      </div>
      <div className='row card-text pt-2'>
        <div className='col'>
          <p className='lead p-2'>{card.front}</p>
        </div>
        <div className='col '>
          <p className='lead p-2'>{card.back}</p>
        </div>
      </div>
      <div className='row-content'>
        <div className='card-button-container p-2'>
          <Link to={`${url}/cards/${id}/edit`} className='btn btn-primary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-pencil-fill align-text-top'
              viewBox='0 0 16 16'
            >
              <path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z' />
            </svg>{' '}
            Edit
          </Link>
          <button className='btn btn-danger' onClick={handleDelete}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-trash-fill align-text-top'
              viewBox='0 0 16 16'
            >
              <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
            </svg>{' '}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
