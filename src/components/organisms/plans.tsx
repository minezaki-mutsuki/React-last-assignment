import styled from 'styled-components';
import { color } from "../../config/color";
import { size , family } from '../../config/font';
import { breakpoint } from '../../config/breakpoint';
import PlanOdd from '../molecules/plan_odd'
import PlanEven from '../molecules/plan_even'
import Message from '../molecules/message';
import Button from '../atoms/button';

const Plans = () => {
    const args1 = {
        title: 'デイタイムプラン',
        price: 5000,
        unit: '月額',
        list1:'入会金0円',
        list2: '平日:9時～17時',
        list3: '土日月:利用ナシ',
        list4: 'コアタイムでの利用に最適なプラン'
    }
    const args2 = {
        title: 'スタンダードプラン',
        price: 15000,
        unit: '月額',
        list1:'入会金0円',
        list2: '平日:17時～23時',
        list3: '土日祝:営業時間全て',
        list4: '営業時間内で終日ご利用可能なプラン'
    }
    const args3 = {
        title: 'プレミアムプラン',
        price: 20000,
        unit: '月額',
        list1:'入会金5000円',
        list2: '平日:営業時間全て',
        list3: '土日祝:営業時間全て',
        list4: 'フルに使いたい方のためのプレミアムなプラン'
    }
    const messageArgs = {
        title: 'ライフスタイルに合わせて選べる多彩なプラン。',
        contents: '平日のみのプラン、仕事帰りをコアタイムとした夕方以降が中心のプラン、休日をメインとしたプランなど、多彩なプランの中からそれぞれのお客様のライフスタイルに合わせてお選びいただけます。ビジター料金でのご利用も可能ですので、月額会員登録の前に体験をしたいという方もぜひご利用ください。',
        titleColor: color.orange_bistre
    }
    const buttonArgs = {text: 'プラン料金'}
    return(
        <Wrapper>
            <Message {...messageArgs}/>
            <div className='plansWrapper'>
            <PlanOdd {...args1}/>
            <PlanEven {...args2}/>
            <PlanOdd {...args3}/>
            </div>
            <Button {...buttonArgs}/>
        </Wrapper>
    );
}

export default Plans

const Wrapper = styled.div`
    .plansWrapper{
        @media (min-width: ${breakpoint.md}){
        align-items: flex-start;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 30px;
        }
    }      
`