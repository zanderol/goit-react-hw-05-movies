import { TailSpin } from 'react-loader-spinner';
import styled from './Spinner.module.css';

export function Spinner() {
  return (
    <div className={styled.spiner}>
      <TailSpin height="150" width="150" color="white" ariaLabel="loading" />
    </div>
  );
}
