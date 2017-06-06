export default function NaturalSort(a, b) {
  const ax = []
  const bx = []

  a.replace(/(\d+)|(\D+)/g, (_, $1, $2) => { ax.push([$1 || Infinity, $2 || '']) })
  b.replace(/(\d+)|(\D+)/g, (_, $1, $2) => { bx.push([$1 || Infinity, $2 || '']) })

  while (ax.length && bx.length) {
    const an = ax.shift()
    const bn = bx.shift()
    const nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1])
    if (nn) {
      return nn
    }
  }

  return ax.length - bx.length
}