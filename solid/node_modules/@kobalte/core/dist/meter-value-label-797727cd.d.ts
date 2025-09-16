import * as solid_js from 'solid-js';
import { Accessor, JSX, ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface MeterDataSet {
}
interface MeterContextValue {
    dataset: Accessor<MeterDataSet>;
    value: Accessor<number>;
    valuePercent: Accessor<number>;
    valueLabel: Accessor<string | undefined>;
    meterFillWidth: Accessor<string | undefined>;
    labelId: Accessor<string | undefined>;
    generateId: (part: string) => string;
    registerLabelId: (id: string) => () => void;
}
declare function useMeterContext(): MeterContextValue;

interface MeterFillOptions {
}
interface MeterFillCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
}
interface MeterFillRenderProps extends MeterFillCommonProps, MeterDataSet {
}
type MeterFillProps<T extends ValidComponent | HTMLElement = HTMLElement> = MeterFillOptions & Partial<MeterFillCommonProps<ElementOf<T>>>;
/**
 * The component that visually represents the meter value.
 * Used to visually show the fill of `Meter.Track`.
 */
declare function MeterFill<T extends ValidComponent = "div">(props: PolymorphicProps<T, MeterFillProps<T>>): JSX.Element;

interface MeterLabelOptions {
}
interface MeterLabelCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface MeterLabelRenderProps extends MeterLabelCommonProps, MeterDataSet {
}
type MeterLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = MeterLabelOptions & Partial<MeterLabelCommonProps<ElementOf<T>>>;
/**
 * An accessible label that gives the user information on the meter.
 */
declare function MeterLabel<T extends ValidComponent = "span">(props: PolymorphicProps<T, MeterLabelProps<T>>): solid_js.JSX.Element;

interface GetValueLabelParams {
    value: number;
    min: number;
    max: number;
}
interface MeterRootOptions {
    /**
     * The meter value.
     * @default 0
     */
    value?: number;
    /**
     * The minimum meter value.
     * @default 0
     */
    minValue?: number;
    /**
     * The maximum meter value.
     * @default 100
     */
    maxValue?: number;
    /**
     * A function to get the accessible label text representing the current value in a human-readable format.
     * If not provided, the value label will be read as a percentage of the max value.
     */
    getValueLabel?: (params: GetValueLabelParams) => string;
}
interface MeterRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    role: string;
    "aria-valuenow": number | undefined;
    "aria-valuemin": number;
    "aria-valuemax": number;
    "aria-valuetext": string | undefined;
    "aria-labelledby": string | undefined;
}
interface MeterRootRenderProps extends MeterRootCommonProps, MeterDataSet {
}
type MeterRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = MeterRootOptions & Partial<MeterRootCommonProps<ElementOf<T>>>;
/**
 * Meter displays numeric value that varies within a defined range.
 */
declare function MeterRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, MeterRootProps<T>>): solid_js.JSX.Element;

interface MeterTrackOptions {
}
interface MeterTrackCommonProps<T extends HTMLElement = HTMLElement> {
}
interface MeterTrackRenderProps extends MeterTrackCommonProps, MeterDataSet {
}
type MeterTrackProps<T extends ValidComponent | HTMLElement = HTMLElement> = MeterTrackOptions & Partial<MeterTrackCommonProps<ElementOf<T>>>;
/**
 * The component that visually represents the meter track.
 * Act as a container for `Meter.Fill`.
 */
declare function MeterTrack<T extends ValidComponent = "div">(props: PolymorphicProps<T, MeterTrackProps<T>>): solid_js.JSX.Element;

interface MeterValueLabelOptions {
}
interface MeterValueLabelCommonProps<T extends HTMLElement = HTMLElement> {
}
interface MeterValueLabelRenderProps extends MeterValueLabelCommonProps, MeterDataSet {
    children: JSX.Element;
}
type MeterValueLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = MeterValueLabelOptions & Partial<MeterValueLabelCommonProps<ElementOf<T>>>;
/**
 * The accessible label text representing the current value in a human-readable format.
 */
declare function MeterValueLabel<T extends ValidComponent = "div">(props: PolymorphicProps<T, MeterValueLabelProps<T>>): JSX.Element;

export { MeterDataSet as A, MeterRoot as M, MeterFill as a, MeterLabel as b, MeterTrack as c, MeterValueLabel as d, MeterFillOptions as e, MeterFillCommonProps as f, MeterFillRenderProps as g, MeterFillProps as h, MeterLabelOptions as i, MeterLabelCommonProps as j, MeterLabelRenderProps as k, MeterLabelProps as l, MeterRootOptions as m, MeterRootCommonProps as n, MeterRootRenderProps as o, MeterRootProps as p, MeterTrackOptions as q, MeterTrackCommonProps as r, MeterTrackRenderProps as s, MeterTrackProps as t, MeterValueLabelOptions as u, MeterValueLabelCommonProps as v, MeterValueLabelRenderProps as w, MeterValueLabelProps as x, useMeterContext as y, MeterContextValue as z };
