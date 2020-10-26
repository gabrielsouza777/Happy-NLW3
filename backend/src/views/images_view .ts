import Image from '../models/Image'

export default{
    render(image: Image){
        return {
            id: image.id,
            url:`https://192.168.15.3:3333/uploads/${image.path}`
        }
    },
    renderMany(image: Image[]){
        return image.map(image => this.render(image))
    }
}