import { expect } from "chai";
import Util from "./TestUtil";
import HelloWorld from "@/components/buttons/LocaleButton.vue";

describe("LocaleButton.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = Util.getRenderedComponent(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
