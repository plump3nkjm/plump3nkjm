import {ReactElement, memo, useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {faSpinner} from "@fortawesome/pro-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type Props = {
    children: ReactElement,
    loading: boolean,
    disabled: boolean,
    variant: string,
    onClick: ()=> {}
}
export const SubmitButton = memo(({children, loading, disabled, variant, onClick}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    if(loading) {
        setIsLoading(loading)
    } else {
      setTimeout(()=> {
          setIsLoading(loading)
      }, 600)
    }
  }, [loading])

  return (
    <Button
        variant={'contained'}
        disabled={disabled}
        onClick={onClick}
        sx={{
          minWidth: 92,
          maxHeight: 27,
          borderRadius: 8,
          boxShadow: 'none',

          '&.error': {
            background: (theme) => theme.palette.error.main
          },
          '&.success': {
            background: (theme) => theme.palette.success.main
          },
          '&:disabled': {
            opacity: '.65'
          }}
    }>
      { isLoading ? <FontAwesomeIcon icon={faSpinner} spin color={'#fff'}/> : children}
    </Button>
  )
})
