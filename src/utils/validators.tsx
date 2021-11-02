import React from "react";

export const required = (value: string) => {
    if (value) return undefined;
    return "value required"

}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `max length ${maxLength} symbols`;
    return undefined
}