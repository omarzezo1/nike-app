import {reviews} from '../constants/index'
import ReviewCard from '../components/ReviewCard'

const CustomersReviews = () => {
  return (
    <section className='bg-pale-blue padding max-container'>
        <h3 className='text-4xl text-center font-bold font-palanquin'>What Our <span className='text-coral-red'>Customers</span> Say?</h3>
        <p className='text-slate-gray text-xl text-center max-w-lg mt-4 info-text mx-auto'>
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 '>
        {
          reviews.map((review, index)=>(
            <ReviewCard key={index} review={review}/>
          ))
        }
        </div>
    </section>
  )
}

export default CustomersReviews