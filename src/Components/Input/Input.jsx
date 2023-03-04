import * as S from "./styled.js"

export function Input({value}) {
  return (
    <S.Input>
        <input value={value} disabled/>
    </S.Input>
  )
}
