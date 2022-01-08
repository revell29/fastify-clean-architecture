import { UserInterface } from '../interface/users.interface'

export const userEntities = (data: UserInterface) => {
  return {
    id: data.id,
    email: data.email,
    name: data.name,
    schemaname: data.schemaname,
    host: data.host,
    hostname: data.hostname,
    paket_id: data.paket_id,
    is_active: data.is_active,
    has_paid: data.has_paid,
    no_hp: data.no_hp,
    template_id: data.template_id,
    last_tenant: data.last_tenant,
    is_admin: data.is_admin,
    paket: data.paket,
    token_verify: data.token_verify,
    tenants: data.tenants,
  }
}
