export function useEvents () {
    const events = useEvents('~/pages/events')
    return computed(() => events.value.sort(byDate))
  }