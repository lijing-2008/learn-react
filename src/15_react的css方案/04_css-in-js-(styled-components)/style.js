import styled from "styled-components";
import * as vars from "./style/varables"

// 1.基本使用
export const AppWrapper = styled.div`
  .footer {
    border: 2px solid orange;

    &:hover {
      background-color: ${props => props.theme.color};
    }
  }
`

// 2.子元素单独抽取到一个样式组件
// 3.可以接收外部传入的props
// 4.可以通过attrs给标签膜版字符串提供属性
// 5.从一个单独的文件中引入变量
// 6.共享主题的变量ThemeProvider
// 7.继承特性 styled(xxx组件)
export const SectionWrapper = styled.div.attrs(props => {
	return {
		textColor: props.color || "blue"
	}
})`
  margin-bottom: 3px;
  border: 1px solid #f00;

  .title {
    font-size: ${props => props.size};
    color: ${props => props.textColor};
  }

  &:hover {
    background-color: ${vars.secondColor};
  }

  .content {
    font-size: ${vars.largeSize};
  }
`
