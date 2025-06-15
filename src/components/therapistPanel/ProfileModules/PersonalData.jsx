
const PersonalData = ({TPProfile}) => {

  const formatCardNumber = (cardNumber) => {
    if(cardNumber)
    return cardNumber.match(/.{1,4}/g)?.join('-') || '';
  };

  return (
    <div className='col dark:text-neutral-300 gap-4'>
        <h3 className=' text-xl font-semibold'>Bio</h3>
        <p>{TPProfile?.first_name}</p>
        <p>{TPProfile?.last_name}</p>
        <p>{TPProfile?.birth_date}</p>
        <p>{TPProfile?.gender}</p>
        <hr className='text-zinc-400'/>
        <h3 className='text-xl font-semibold'>Bank Account </h3>
        <p>{formatCardNumber(TPProfile?.credit_card_number)}</p>
        <hr className='text-zinc-400' />
        <h3 className='text-xl font-semibold'>Location </h3>
        <p>Canada</p>
        <p>toronto</p>
        <p>4845-562</p>
        <hr className='text-zinc-400' />
        <h3 className='text-xl font-semibold'>medical certificates</h3>
        </div>
  )
}

export default PersonalData