import {services} from '../constants/index'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='padding-x py-10 max-container flex justify-center flex-wrap gap-9'>
        {
          services.map((service, index)=>(
            <ServiceCard key={index} service={service}/>
          ))
        }
    </section>
  )
}

export default Services