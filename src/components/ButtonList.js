import Button from './Button'

const ButtonList=()=>{

    const ListofButtons=["ALL","Gaming","Songs","Live","Soccer","Cricket","Cooking","News","valentine","Cricket","Comedy","T-series","Watched","Top-POP","Indian-music"]
    return (
        <div className='flex'>
        {
         ListofButtons.map((btn) => 
         <Button key={btn.index} name={btn}/>
         )
        }

        </div>
    )
}

export default ButtonList;