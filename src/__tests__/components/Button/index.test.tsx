import * as React from 'react';
import {shallow} from 'enzyme';
import Button from '../../../components/Button';

test('小コンポーネントが存在すること', () => {
  const wrapper = shallow(<Button text="ボタンです" flag={true} action={() => console.log("test")} />);

  expect(wrapper.find("button").length).toBe(1);
  expect(wrapper.find("p").length).toBe(1);

  expect(wrapper.find("p").text()).toEqual("ボタンです");

  expect(wrapper).toMatchSnapshot();
});

test('pコンポーネントが表示されないこと', () => {
  const wrapper = shallow(<Button text="ボタンです" flag={false} action={() => console.log("test")} />);

  expect(wrapper.find("button").length).toBe(1);
  expect(wrapper.find("p").length).toBe(0);

  expect(wrapper).toMatchSnapshot();
});

test('イベント発火時にコールバック関数が呼び出されること', () => {
  const Spy = jest.fn();
  const wrapper= shallow(
    <Button text="ボタンです" flag={true} action={Spy} />
  );

  wrapper.find('button').simulate('click');
  expect(Spy).toHaveBeenCalledWith();

  expect(wrapper).toMatchSnapshot();
});
