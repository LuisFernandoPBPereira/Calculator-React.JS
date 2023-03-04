import * as S from "./styled.js"

export function Button({value, onClick}) {
  return (
    <S.Button onClick={onClick}>
      {value}
    </S.Button>
  )
}
