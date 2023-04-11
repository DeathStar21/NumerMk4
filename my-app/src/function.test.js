import { fireEvent, render ,screen } from "@testing-library/react";
import Graphical from "./ROE/Graphical";

test('find the graphical equation',()=>{
    render (<Graphical/>);
    const fx = screen.getByTestId('equation');
    fireEvent.change(fx, {target:{value:"(x^4)-13"}})

    const xl = screen.getByTestId('xl');
    fireEvent.change(xl, {target:{value:1}})

    const xr = screen.getByTestId('xr');
    fireEvent.change(xr, {target:{value:3}})

    const bt = screen.getByTestId('cal');
    fireEvent.click(bt)

    const ans = screen.getByTestId('ans');

    expect(ans.textContent).toBe("Answer = "+1.898829)

});
