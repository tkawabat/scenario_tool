import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Button,  } from '@material-ui/core';

import { RootState } from '../../store/rootReducer';

import PdfUtil from '../../lib/PdfUtil';


type Props = {
}

const App = (props: Props) => {
    const paragraph = useSelector((state: RootState) => state.paragraph);
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const files = e.target.files;

        files[0].arrayBuffer().then((ab: ArrayBuffer) => {
            PdfUtil.convertText(Buffer.from(ab));
        });

        e.target.value = ""; // 空にすることで次のonchangeが発火するようにする
    }

    return (
        <Button variant="contained" component="label">
            PDFファイルを読み込み
            <input type="file" hidden accept=".pdf" onChange={onChange} />
         </Button>
    );
};

export default App;
