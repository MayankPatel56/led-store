import { createClient } from '@supabase/supabase-js'

// Your new Supabase configuration
const supabaseUrl = 'https://msanvenejzjbjhxviwwz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zYW52ZW5lanpqYmpoeHZpd3d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTM3ODksImV4cCI6MjA3OTI2OTc4OX0.WGeWIstgpF47Y-hEpIIN-WimcqJdeLDMgsp1jshWcfk'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions
export const supabaseHelpers = {
  // Get all products
  async getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
    
    if (error) {
      console.error('Error fetching products:', error)
      return []
    }
    return data || []
  },

  // Get products by category
  async getProductsByCategory(categorySlug) {
    // First get the category ID
    const { data: categoryData, error: categoryError } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', categorySlug)
      .single()

    if (categoryError || !categoryData) {
      console.error('Error finding category:', categoryError)
      return []
    }

    // Then get products for that category
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryData.id)
      .eq('is_active', true)
    
    if (error) {
      console.error('Error fetching products by category:', error)
      return []
    }
    return data || []
  },

  // Get single product
  async getProductById(id) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) {
      console.error('Error fetching product:', error)
      return null
    }
    return data
  },

  // Get product by slug
  async getProductBySlug(slug) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) {
      console.error('Error fetching product by slug:', error)
      return null
    }
    return data
  },

  // Get categories
  async getCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
    
    if (error) {
      console.error('Error fetching categories:', error)
      return []
    }
    return data || []
  },

  // Validate promo code
  async validatePromoCode(code, orderAmount) {
    const { data, error } = await supabase
      .from('promo_codes')
      .select('*')
      .eq('code', code)
      .eq('is_active', true)
      .lte('min_order_amount', orderAmount)
      .or(`expires_at.is.null,expires_at.gt.${new Date().toISOString()}`)
      .single()

    if (error) {
      return { 
        valid: false, 
        message: 'Invalid promo code',
        discount: 0 
      }
    }
    
    // Check usage limit
    if (data.usage_limit && data.used_count >= data.usage_limit) {
      return { 
        valid: false, 
        message: 'Promo code usage limit reached',
        discount: 0 
      }
    }

    const discount = data.discount_type === 'percentage' 
      ? Math.min((orderAmount * data.discount_value / 100), data.max_discount_amount || orderAmount)
      : data.discount_value

    return {
      valid: true,
      data: data,
      discount: discount,
      message: 'Promo code applied successfully'
    }
  },

  // Create order
 // Fixed createOrder function
async createOrder(orderData) {
  try {
    console.log('🟡 Starting order creation with data:', orderData);

    // Prepare the order payload with exact column names
    const orderPayload = {
      first_name: orderData.firstName,
      last_name: orderData.lastName,
      contact_number: orderData.contactNumber,
      house_no: orderData.houseNo,
      road_name: orderData.roadName,
      pin_code: orderData.pinCode,
      city: orderData.city,
      state: orderData.state,
      payment_method: orderData.paymentMethod,
      total_amount: orderData.totalAmount,
      order_status: 'pending',
      order_number: `ORD-${Date.now()}` // Make sure this column exists
    };

    console.log('🟡 Order payload:', orderPayload);

    const { data, error } = await supabase
      .from('orders')
      .insert([orderPayload])
      .select();

    if (error) {
      console.error('❌ SUPABASE INSERT ERROR:', error);
      console.error('❌ Error details:', error.message, error.details, error.hint);
      throw error;
    }

    console.log('✅ Order created successfully in database:', data);
    return data[0]; // Return the first order

  } catch (error) {
    console.error('❌ ORDER CREATION FAILED:', error);
    throw error;
  }
},
  // Create order items
  async createOrderItems(orderItems) {
    const { data, error } = await supabase
      .from('order_items')
      .insert(orderItems)

    if (error) {
      console.error('Error creating order items:', error)
      throw error
    }
    return data
  },

  // Get order by order number
  async getOrderByNumber(orderNumber) {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (*)
      `)
      .eq('order_number', orderNumber)
      .single()
    
    if (error) {
      console.error('Error fetching order:', error)
      return null
    }
    return data
  },

  // Search products
  async searchProducts(query) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .ilike('name', `%${query}%`)
      .eq('is_active', true)
    
    if (error) {
      console.error('Error searching products:', error)
      return []
    }
    return data || []
  },

  // Get featured products
  async getFeaturedProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_featured', true)
      .eq('is_active', true)
      .limit(6)
    
    if (error) {
      console.error('Error fetching featured products:', error)
      return []
    }
    return data || []
  },

  // Update promo code usage
  async updatePromoCodeUsage(promoCodeId) {
    const { error } = await supabase
      .from('promo_codes')
      .update({ used_count: supabase.raw('used_count + 1') })
      .eq('id', promoCodeId)

    if (error) {
      console.error('Error updating promo code usage:', error)
    }
  }
}

export default supabase