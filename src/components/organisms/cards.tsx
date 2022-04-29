import styled from 'styled-components';
import { breakpoint } from '../../config/breakpoint';
import Card from '../molecules/card'
import Concept from '../image/concept.png'
import Service from '../image/service.png'
import Floor from '../image/floor.png'

const Cards = () => {
    const Cards = [
        {text:'コンセプト' , title: 'CONCEPT' , img: Concept , contents: '「本屋」でも「自習室」でもない、新しい空間。それがこのカフェ&コワーキングです。お好きなドリンクを飲みながらゆったりと気兼ねなく勉強や仕事に取り組んでいただけます。'},
        {text: 'サービス' , title: 'SERVICE' , img: Service , contents: '喫茶・軽食を楽しめるカフェスペース。ビジネス書から最新の雑誌まで取りそろえるブックスペース。ブース型のパーソナルワークスペースに、開放感があるコワーキングスペース。'},
        {text: 'フロアー' , title: 'FLOOR' , img: Floor , contents: 'カフェ・ブック・コワーキング。各エリアで異なるコンセプトを持つ当店では、目的や気分に合わせてフロア内を移動することで充実した時間をお過ごしいただけます。'}
    ];
    return(
        <Wrappers>
            {Cards.map((args) => {
                return(
                    <Card {...args}/>
                )
            })}
        </Wrappers>
    );
}

export default Cards

const Wrappers = styled.div`
    @media (min-width: ${breakpoint.md}){
    align-items: flex-start;
    display: flex;
    gap: 24px;
    } 
`