import type { Component } from 'vue'

export type ButtonPropsType = {
    onClick: () => void
    text: string
    fullWidth: boolean
    color?: string
    disabled: boolean
}