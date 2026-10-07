const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "")
  const ddd = digits.slice(0, 2)
  const rest = digits.slice(2)

  if (digits.length <= 2) return `(${digits}`
  if (rest.length <= 4) return `(${ddd}) ${rest}`

  if (rest[0] === "9") {
    if (rest.length <= 5) return `(${ddd}) ${rest}`
    if (rest.length <= 9) return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`
    return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`
  }

  if (rest.length <= 4) return `(${ddd}) ${rest}`
  if (rest.length <= 8) return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`
  return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4, 8)}`
}

export default formatPhone;