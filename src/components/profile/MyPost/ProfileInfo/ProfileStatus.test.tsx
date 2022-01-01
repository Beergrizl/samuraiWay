import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus  status='yo'  updateStatus={()=>{} }/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("yo");
    });

test("after creating span should be displayed", () => {
    const component = create(<ProfileStatus  status='yo'  updateStatus={()=>{} }/>);
    const root = component.root;
    let span = root.findByType('span')
    expect(span).not.toBeNull();
});
    test("after creating input shouldn't be displayed", () => {
        const component = create(<ProfileStatus  status='yo'  updateStatus={()=>{} }/>);
        const root = component.root;
        expect(()=>{let input = root.findByType('input')})
            .toThrow();
    });
    test("after creating span should contains correct status", () => {
        const component = create(<ProfileStatus  status='yo' updateStatus={()=>{} } />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children).not.toBe('yo');
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus  status='yo'  updateStatus={()=>{} }/>);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')
        expect(input.props.value).toBe('yo');
    });
    test("callback should be called", () => {
        const mockCallback=jest.fn()
        const component = create(<ProfileStatus  status='yo' updateStatus={mockCallback }/>);
        const instance = component.getInstance();
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});