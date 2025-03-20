import { PageProps } from "$fresh/server.ts";
import { type Signal, useSignal } from "@preact/signals";
import { Button } from "../../components/Button.tsx";
import Counter from "../../islands/Counter.tsx";

export default function Greet(props: PageProps) {
  const count = useSignal(99);
  return (
    <div>
      <div>Hello {props.params.name}</div>
      <Counter count={count} />
      <MyCounter count={count} />
    </div>
  );
}

interface MyCounterProps {
  count: Signal<number>;
}

function MyCounter(props: MyCounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
