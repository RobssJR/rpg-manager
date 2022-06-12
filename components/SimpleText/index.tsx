import { Component, ReactNode } from 'react';
import { Text, View } from 'react-native';
import { style }  from './style';

export default class SimpleText extends Component {
    textType: string;
    itemStyle: any;
    
    constructor(props: any) {
        super(props);
        
        this.textType = props.textType;
        
        switch (this.textType) {
            case 'simple':
                this.itemStyle = style.draculaSimpleText
                break;
                
            case 'title':
                this.itemStyle = style.draculaTitle
                break;
            case 'titleone':
                this.itemStyle = style.draculaTitleOne
                break;

            default:
                this.itemStyle = style.draculaSimpleText
                break;
            }
    }
    
    render() {
        return (
            <Text style={[this.itemStyle, {fontFamily:'Comfortaa'}]}>{this.props.children}</Text>
        );
    }
}
    